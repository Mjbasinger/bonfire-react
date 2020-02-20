import { useState } from 'react'


export const useInputValue = (props) => {
    const [value, setValue] = useState(props)

    return {
        type: 'text',
        value: value,
        onChange: (e) => setValue(e.target.value)
    }
}


// export const handleLogged = (props) => {
//     const [state, setState] = useState(props)
      
//     return {
//         state: true,
//         state: setState
//     }
//   }