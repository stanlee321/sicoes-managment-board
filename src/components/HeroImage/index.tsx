import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styles
import { Wrapper, Content, Text, StatusSignal } from "./HeroImage.styles";

// Components
import Button from "../Button";
import InputField from "../InputField";

// Hooks
import useFetch from "../../hooks/useFetch";
import useCheckServer from "../../hooks/useCheckServer";
import useCheckQueue from "../../hooks/useCheckQueue";

interface Props {
  image: string;
  text: string;
  title: string;
}

const HeroImage = ({ image, text, title }: Props) => {
  const {
    start,
    setStart,
    end,
    setEnd,
    batchSize,
    setBatchSize,
    loading,
    error,
    createParams,
    errorParams,
    setErrorParams,
  } = useFetch();

  const { loadingServer, errorServer } = useCheckServer();

  const { queue, fetchData, errorQueue, loadingQueue } = useCheckQueue();

  function notify() {
    createParams(start, end, batchSize);

    if (errorParams) {
      toast.error(" CANNTO CREATE params!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(" 🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      fetchData();
    }
  }
  return (
    <Wrapper image={image}>
      <Content>
        {errorServer ? (
          <h1> NO SERVER</h1>
        ) : (
          <>
            <div className="buttonsSection">
              <Button onClick={notify}>Set Parameters</Button>
              {/* <Button onClick={notify} primary={true}>
                Clean Parameters
              </Button> */}
            </div>
            <div className="inputsSection ">
              <InputField placeHolder={"start"} setInput={setStart} />
              <InputField placeHolder={"end"} setInput={setEnd} />
              <InputField placeHolder={"batchSize"} setInput={setBatchSize} />
            </div>
            <div className="dataSection">
              <Text>
                <h1>{title}</h1>
                <p>{text}</p>
              </Text>
              <div className="parametersSection">
                <h1>Start: {start}</h1>
                <h1>End: {end}</h1>
                <h1>Batch Size: {batchSize}</h1>
                <p>-----------</p>
                <p>Queue State</p>

                <h1>Queue Size: {queue?.queue_size}</h1>
                <h1>
                  Remaining Pages:{" "}
                  {queue?.queue_size
                    ? queue?.queue_size * (batchSize ? batchSize : 0)
                    : 0}
                </h1>
              </div>
              <Button
                onClick={() => {
                  fetchData();
                }}
              >
                Refresh Queue state
              </Button>
            </div>
            <div className="statusSection">
              <h1>Server Status: </h1>
              <StatusSignal color={errorServer ? "red" : "green"} />
            </div>
          </>
        )}
      </Content>

      <ToastContainer />
    </Wrapper>
  );
};

export default HeroImage;
