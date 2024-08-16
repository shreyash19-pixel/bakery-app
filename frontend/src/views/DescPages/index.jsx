import React from "react"
import image1 from "../../assests/CatalogImages/Image1.jpg"
import { DescContainer,DescWrapper,DescImgWrapper,ImgWrapper,DescImgWrapper1,Description,ButtonWrapper,Buy,Review,Img, OtherProducts, DescProduct }  from "../../styles/DescPages";

function DescPages (){
    return(
        <DescContainer>
            <DescWrapper>
                <DescImgWrapper>
                    <ImgWrapper>
                        <Img src={image1}>
                        </Img>
                    </ImgWrapper>
                    <DescImgWrapper1>
                        <Description>
                        Vegan Chocolate Chip <br/> Cookie Dough
                        </Description>
                        <Review>
                            Stars and facts here
                        </Review>
                        <OtherProducts>
                            Images of other product here inside circles
                        </OtherProducts>
                        <ButtonWrapper>
                                <Buy>
                                Add to Cart
                                </Buy>
                        </ButtonWrapper>
                        <DescProduct>
                            Actual Description of he product
                        </DescProduct>
                    </DescImgWrapper1>
                </DescImgWrapper>
            </DescWrapper>
        </DescContainer>
    )
}

export default DescPages

