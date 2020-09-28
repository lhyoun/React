import React from "react";
import styled from "styled-components";

const Search = () => {
  const SearchStyle = styled.div`
    background-color: white;
    width: 430px;
    height: 500px;
    display: inline-block;
    position: relative;
    /*  박스와 박스가 겹칠 때 물 흐르듯이 내려가는.. default: static 
        새로운 박스가 들어왔을 때 relative는 자기 이전의 애랑 관계를 정의해서 뭐.. 마진 대신 사용. 띄우기 위해(겹칠 수도 있다)*/
    top: 10px;
    left: 50px;
    /* 이 두 속성은 static에서는 줄 수 없다 */
    padding: 20px 30px;
    /* 세로 가로 각각 들어감 20 30 20 30이랑 같음(12, 3, 6 ,9) */
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const SearhSubTitleStyle = styled.td`
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 600;
  `;

  const SearchInputStyle = styled.input`
    height: 45%;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchSelectStyle = styled.select`
    height: 45%;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px;
  `;

  const SearchButtonStyle = styled.button`
    background-color: rgb(255, 90, 95);
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0px;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길
        <br />
        거리를 예약하세요
      </SearchTitleStyle>
      <table style={{ width: "100%" }}>
        <tr>
          <SearhSubTitleStyle colSpan="2">목적지</SearhSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle
              type="text"
              placeholder=" 모든 위치"
            ></SearchInputStyle>
          </td>
        </tr>
        <tr>
          <SearhSubTitleStyle>체크인</SearhSubTitleStyle>
          <SearhSubTitleStyle>체크아웃</SearhSubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date"></SearchInputStyle>
          </td>
          <td>
            <SearchInputStyle type="date"></SearchInputStyle>
          </td>
        </tr>
        <tr>
          <SearhSubTitleStyle colSpan="2">인원</SearhSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchSelectStyle>
              <option>인원</option>
            </SearchSelectStyle>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
