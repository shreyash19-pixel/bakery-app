import React from "react";
import { DescContainer,DescWrapper,DescImgWrapper,ImgWrapper,DescImgWrapper1,Description,ButtonWrapper,Buy,Review,Img }  from "../../styles/DescPages";

function DescPages (){
    return(
        <DescContainer>
            <DescWrapper>
                <DescImgWrapper>
                    <ImgWrapper>
                        <Img>
                        </Img>
                    </ImgWrapper>
                    <DescImgWrapper1>
                        <Description>
                            <ButtonWrapper>
                                <Buy>

                                </Buy>
                            </ButtonWrapper>  
                        </Description>
                    </DescImgWrapper1>
                </DescImgWrapper>
                <Review>
                
                </Review>
            </DescWrapper>
        </DescContainer>
    )
}

export default DescPages

