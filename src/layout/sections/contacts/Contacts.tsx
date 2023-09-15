import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Name"}/>
                    <S.Field placeholder={"Surname"}/>
                    <S.Field placeholder={"Description"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

