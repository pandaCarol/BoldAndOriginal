import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { defaultLi, defaultSection, defaultsText, defaultSubTitle, defaultUl, pageTitle } from "../css/cssDefault";
import { ContactSale } from "./btn";

import pricingBg from '../imgs/bg/pricingBg.svg';
import bgPricing300 from '../imgs/bg/bgPricing300.svg';
import bgPricing500 from '../imgs/bg/bgPricing500.svg';
import { set } from "react-hook-form";

const Title = styled(pageTitle)`
    position: relative;
    margin-left: 0;
    margin-block-end: 0.5rem;
    font-size: 2rem;

    :first-child {
        line-height: calc(3rem + 5vh);
        margin-block: 0;
        font-size: 1.2rem;

        &&:before {
            content: '';
        }
        &&:after {
            content: '';
        }
    }

    &&:before {
        position: absolute;
        content: 'from';
        top: -0.5rem;
        left: calc(50% - 6rem);
        font-weight: 50;
        font-size: 0.6rem;
        font-style: italic;
    }

    &&:after {
        position: absolute;
        content: 'C$';
        top: 0.25rem;
        left: calc(50% - 3.5rem);
        font-weight: 100;
        font-size: 1rem;
        font-style: italic;
    }

`
const ContentRecommend = styled(defaultsText)`
    margin-block: 0;
`
const ContentWrapper = styled.div`
    padding: 0.5rem calc(1rem + 2vw) calc(1rem + 1vw);
`
const GridBg = styled.div`

`

const Wrapper = styled.div`
    position: relative;

    .packages {
        display: inline-flex;
        width: 88%;
    }
    

    &&:before {
        position: absolute;
        bottom: 0;
        z-index: -2;
        content: "";
        width: 100%;
        height: ${props => props.bgheight};
        background-image: url(${pricingBg});
        background-repeat: no-repeat;
        background-size: ${props => props.screenwidth};
        opacity: 0.85;
    }
    
    margin: calc(1rem + 10vh) 0 0;

    .leftWrapper {
        height: 80%;
        margin: auto 0;
    }

    ${GridBg} {
        display: table-cell;
        background-repeat: no-repeat;
    }

    .leftBg {
        background-image: url(${bgPricing300});
        background-size: 100% 100%
    }

    .rightBg {
        background-image: url(${bgPricing500});
        background-size: 125% 100%;
    }

    #normal {
        display: table-cell;
        width: 70%;
        margin: auto 0;
        ${Title} {
            :first-child {
                background-color: #C9B7A8;
            }
        }

        ${ContentWrapper} {
            background-color: #D6D3D2;
        }
    }

    #popular {
        display: table-cell;
        width: 65%;
        ${Title} {
            :first-child {
                background-color: #E0DCD9;
            }
        };

        ${ContentWrapper} {
            background-color: #C9B7A8;
        }

        ${ContentRecommend} {
            background-color: #FBD909;
        }
    }

`

const PackageWrapper = styled(defaultSection)`
    width: calc(10rem + 50%);
    text-align: center;
    position: relative;
`
/*
    &&:before {
        position: absolute;
        right: calc(10rem + 50%);
        top: -calc(3rem + 5vh);
        content: "";
        width:100%;
        height: 100%;
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: contain;
        transform: rotateY(180deg);
        zoom: 150%;
    }

*/

const SubTitle = styled(defaultSubTitle)`
    font-weight: 500;
    margin-bottom: calc(1rem + 3vh);
`

const DetailsWrapper = styled(defaultUl)`
    text-align: left;
    padding-inline-start: 1rem;
`
const DetailsContents = styled(defaultLi)`
`
const Content = styled(defaultsText)`
    font-weight: 50;
    font-size: 0.6rem;
    font-style: italic;
    margin-bottom: calc(1rem + 2vh);
`

export const Products = ({contents}) => {
    
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize', handelResize)
        return () => {
            window.removeEventListener('resize', handelResize)
        }
    }, [screenSize])

    function handelResize() {
        setScreenSize(window.innerWidth)
    }

    const packages = contents.map((item, index) => {
        const packagesDetails = item.contents.map((content, index) => {
            return (
                <DetailsWrapper key={index}>
                    <DetailsContents>{content}</DetailsContents>
                </DetailsWrapper>
            )
        }
        )

        return (
            <div 
                key={index} 
                style={{display: 'table'}}
                className={item.additionalInfo ? 'rightWrapper' : 'leftWrapper'}
            >
                <GridBg className={item.additionalInfo ? 'rightBg' : 'leftBg'}></GridBg>
                <PackageWrapper id={item.additionalInfo ? 'popular' : 'normal'}>
                        <Title className={item.additionalInfo ? 'popular' : 'normal'}>{item.productName}</Title>
                        <ContentRecommend className='recommend'>{item.additionalInfo}</ContentRecommend>
                        <ContentWrapper>
                            <SubTitle>{item.users}</SubTitle>
                            <Title>{item.price}</Title>
                            <Content>{item.priceRange}</Content>
                            <ContactSale contents='Contact Sales' />
                            {packagesDetails}
                        </ContentWrapper>                
                </PackageWrapper> 
            </div>  
        )
    })
    
    const bgWidth = screenSize.toString() + 'px'
    const bgHeight = Math.ceil(screenSize*0.0735 + 58.769).toString()+'%'

    return (
        <Wrapper screenwidth={bgWidth} bgheight={bgHeight}>
            <div className="packages" >{packages}</div>
        </Wrapper>
    )
}