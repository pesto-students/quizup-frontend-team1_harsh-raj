import React from 'react'
import { Container } from '../components/styled/Container.styled'
// import { Flex } from '../components/styled/Flex.styled'
import { Delete, DeleteContainer } from '../components/styled/DeleteTest.styled'
import { BsXCircleFill } from "react-icons/bs";

function DeleteTest() {

    // const [val, setVal] = useState([])

    // const handleChange = (onChangeValue, i) => {
    //     const inputdata = [...val]
    //     inputdata[i] = onChangeValue.target.value;
    //     setVal(inputdata)
    // }

    // const handleDelete = (i) => {
    //     const deleteVal = [...val]
    //     deleteVal.splice(i, 1)
    //     setVal(deleteVal)
    // }

    // console.log(val, "data-")
    return (
        <>
            <Container>
                <Delete>
                    <h1>Delete tests</h1>
                    {/* {val.map((data, i) => { */}
                    {/* return ( */}
                    <DeleteContainer>
                        {/* <Flex wrap> */}
                        <div>
                            {/* <button onClick={() => handleDelete(i)}> <BsXCircleFill size={30} value={data} onChange={e => handleChange(e, i)} /> </button> */}
                            {/* <button> <BsXCircleFill /> </button> */}
                            <BsXCircleFill color='DB2D37' size={27} />
                        </div>
                        {/* </Flex> */}
                        <b><p>Mock test 1</p></b>
                    </DeleteContainer>
                    {/* ) */}
                    {/* }) */}

                    {/* } */}
                </Delete>
            </Container>
        </>
    );
}

export default DeleteTest;