import React, { useState, useEffect, useRef } from 'react';


// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from './InputField.styles';


interface Props {
    placeHolder: string,
    setInput: React.Dispatch<React.SetStateAction<number|undefined>>
}

const InputField = ( { placeHolder, setInput }: Props ) => {

    const [ state, setState ] = useState<string>('');

    // Control initial render for search do not triger
    const initial = useRef(true);


    useEffect( () => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout( () => {
            setInput(parseInt(state));
        }, 500)

        return () => clearTimeout(timer)

    }, [setInput, state])

    return (
        <Wrapper>
          <Content>
              <img src={searchIcon} alt='search-icon' />
              <input type='number' placeholder={placeHolder} onChange = { event => setState(event.currentTarget.value) }
                value={state}
                />
        </Content>  
        </Wrapper>
    )
}

export default InputField;
