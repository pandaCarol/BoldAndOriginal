import React, { Fragment } from "react";
import styled from "styled-components";
import { defaultSection, defaultsText } from "../css/cssDefault";

import you from '../imgs/icon/you.svg';
import us from '../imgs/icon/us.svg';
import share from '../imgs/icon/share.svg';
import grant from '../imgs/icon/grant.svg';
import search from '../imgs/icon/search.svg';
import upload from '../imgs/icon/upload.svg';
import refresh from '../imgs/icon/refresh.svg';
import bookmark from '../imgs/icon/bookmark.svg';
import settings from '../imgs/icon/settings.svg';

const Wrapper = styled(defaultSection)`
    margin: calc(1rem + 5vh) calc(1rem + 2vw);
    text-align: center;
    width: 80%;

    display: grid;
    grid-template-columns: 2fr 5fr 5fr 4fr;
    grid-template-rows: repeat(4, 1fr);

    .You, .Us, .Workback {
        background-color: #EBD134;
        border-radius: 0.5rem 0.5rem 0 0;
        font-weight: 600;
    }

    .You {
        :before {
            background-image: url(${you})
        }
    }

    .Us {
        :before {
            background-image: url(${us})
        }
    }

    .Step10 {
        :before {
            background-image: url(${share});
        }
    }

    .Step11 {
        :before {
            background-image: url(${upload});
        }
    }

    .Step20 {
        :before {
            background-image: url(${grant});
        }
    }

    .Step21 {
        :before {
            background-image: url(${settings});
        }
    }

    .Step31 {
        :before {
            background-image: url(${search});
        }
    }

    .Step40 {
        :before {
            background-image: url(${refresh});
        }
    }

    .Step41 {
        :before {
            background-image: url(${bookmark});
        }
    }

    .Step1, .Step2, .Step3, .Step4 {
        font-weight: 600;
    }

    .Step1 {
        background-color: rgba(206, 157, 133, 0.25);
        border-radius: 0.5rem 0 0 0;
    };
    .Step2 {
        background-color: rgba(206, 157, 133, 0.45);
    };
    .Step3 {
        background-color: rgba(206, 157, 133, 0.65);
    };
    .Step4 {
        background-color: rgba(206, 157, 133, 0.85);
        border-radius:  0 0 0 0.5rem;
    };
`
const ItemsCell = styled.div`
    margin: 0.1rem;
    height: calc(2rem + 5vh);
    background-color: rgba(220, 220, 220, 0.5);
    position: relative;

    &&:before {
        display: inline-block;
        margin-top: 0.3rem;
        content: '';
        height: 1.5rem;
        width: 1.5rem;
        background-size: cover;
    }

    &&:first-child {
        opacity: 0;
    }

    &&:last-child {
        border-radius:  0 0 0.5rem 0;
    }
`
const Content = styled(defaultsText)`
    margin-block: 0;
`

export const SolutionWay = ({columns, rows}) => {
    const  columnsTitle = columns.map(item => {
        return (
             <ItemsCell key={item} className={item}>
                <Content>{item}</Content>
            </ItemsCell>
        )
    })

    const cells = rows.map( items => {
        const rowName = items.title;
        // using the Number of Steps to set the opacity of cells 
        /*const lastChart = Number(rowName.charAt(rowName.length -1));*/ 
        const eachCalls = items.ways.map((item, index) => {
            const newClassName = rowName.concat(index);
            return (
                <ItemsCell key={index} className={newClassName}>
                    <Content>{item}</Content>
                </ItemsCell>
            )
        })

        return (
            <Fragment key={rowName}>
                <ItemsCell className={rowName} opacity={0.5}>
                    <Content>{rowName}</Content>
                </ItemsCell>
                {eachCalls}
            </Fragment>
            
        );
    })

    return (
        <Wrapper>
            {columnsTitle}
            {cells}
        </Wrapper>
    )
}