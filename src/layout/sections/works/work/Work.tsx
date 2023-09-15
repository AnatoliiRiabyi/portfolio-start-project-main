import React from 'react';
import {TabLink} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>


            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <TabLink active href={"#"}>demo</TabLink>
                <TabLink href={"#"}>Code</TabLink>
            </S.Description>
        </S.Work>
    );
};

