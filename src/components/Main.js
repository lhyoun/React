import React from "react";
import styled from "styled-components";

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
    /* main 전체에 마진 아래 두개는 나중에 지우기 */
    /* border: 1px solid red; */
  `;

  const CardTitleStyle = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin: 0 0 20px 0;
    /* 타이틀 글자 스타일 */
  `;

  const CardStyle = styled.div`
    /* 사진, 글 1:3의 비율로 되어있는 카드 */
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: space-between;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  `;

  const CardCoverStyle = styled.div`
    /* 카드 4개를 감싸는 div */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    height: 70px;
  `;

  const CardContent = styled.div`
    /* 카드의 글자부분 */
    display: grid;
    align-items: center;
    font-weight: 600;
  `;

  const CardImageStyle = styled.div`
    /* 카드의 이미지부분 */
    background-image: url("images/card1.jpg");
    width: 70px;
    background-size: cover;
    background-size: 100% 100%;
  `;

  const Sec3ImageBoxStyle = styled.div`
    background-image: url("images/ad1.jpg");
    width: 100%;
    height: 350px;
    background-size: cover;
    background-size: 100% 100%;
    border-radius: 20px;
  `;

  const Sec5ImageBoxStyle = styled.div`
    background-image: url("images/ad2.png");
    width: 100%;
    height: 350px;
    background-size: cover;
    background-size: 100% 100%;
  `;

  const CardCoverStyle2 = styled.div`
    /* 카드 5개를 감싸는 div */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    height: 300px;
  `;

  const Card2Style = styled.div`
    background-image: url("images/choo1.png");
    width: 100%px;
    background-size: cover;
    background-size: 100% 100%;
  `;

  const CardCoverStyle3 = styled.div`
    /* 카드 5개를 감싸는 div */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const Card3Style = styled.div``;

  const Card3ImageStyle = styled.div`
    background-image: url("images/home5.png");
    width: 100%px;
    background-size: cover;
    background-size: 100% 100%;
    height: 200px;
  `;

  const Card3ContentStyle = styled.div`
    padding-bottom: 10px;
  `;

  return (
    <div>
      <MainStyle>
        <CardTitleStyle>에어비엔비 둘러보기</CardTitleStyle>
        <CardCoverStyle>
          <CardStyle>
            <CardImageStyle></CardImageStyle>
            <CardContent>숙소 및 부티크 호텔</CardContent>
          </CardStyle>
          <CardStyle>
            <CardImageStyle></CardImageStyle>
            <CardContent>트립</CardContent>
          </CardStyle>
          <CardStyle>
            <CardImageStyle></CardImageStyle>
            <CardContent>어드벤처</CardContent>
          </CardStyle>
          <CardStyle>
            <CardImageStyle></CardImageStyle>
            <CardContent>레스토랑</CardContent>
          </CardStyle>
        </CardCoverStyle>
      </MainStyle>
      <MainStyle>
        <Sec3ImageBoxStyle></Sec3ImageBoxStyle>
      </MainStyle>
      <MainStyle>
        <CardTitleStyle>추천여행지</CardTitleStyle>
        <CardCoverStyle2>
          <Card2Style></Card2Style>
          <Card2Style></Card2Style>
          <Card2Style></Card2Style>
          <Card2Style></Card2Style>
          <Card2Style></Card2Style>
        </CardCoverStyle2>
      </MainStyle>
      <MainStyle>
        <CardTitleStyle>에어비앤비 플러스를 만나보세요</CardTitleStyle>
        <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
        <Sec5ImageBoxStyle></Sec5ImageBoxStyle>
      </MainStyle>
      <MainStyle>
        <CardTitleStyle>전 세계 숙소</CardTitleStyle>
        <CardCoverStyle3>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
          <Card3Style>
            <Card3ImageStyle></Card3ImageStyle>
            <Card3ContentStyle>
              오두막 · BALIAN BEACH, BALI
              <br /> BALIAN TREEHOUSE w beautiful pool
              <br />
              ★★★★★ 185 슈퍼호스트
            </Card3ContentStyle>
          </Card3Style>
        </CardCoverStyle3>
      </MainStyle>
    </div>
  );
};

export default Main;
