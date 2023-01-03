import React from 'react'
import Sidebar from "../components/Sidebar";
import { Flex } from "../components/styled/Flex.styled";
import { Container } from "../components/styled/Container.styled";
import Searchbar from "../components/Searchbar";
import { StyledButton } from "../components/styled/Button.styled";
// import examData from "../examData";
// import MockCard from "../components/MockCard";

function Search() {
    return (
        <>
            <Flex>
                <Sidebar />
                <Container>
                    <Flex searchbar>
                        <div>

                            <StyledButton color="grey">All</StyledButton>
                            <StyledButton color="grey">Mock tests</StyledButton>
                            <StyledButton color="grey">Quiz</StyledButton>
                        </div>
                        <Searchbar />
                    </Flex>

                    <Flex>
                        <h1>Mock Tests</h1>

                    </Flex>

                    <Flex>
                        <h1>Quiz</h1>
                    </Flex>
                </Container>
            </Flex>
        </>
    )
}

export default Search;
