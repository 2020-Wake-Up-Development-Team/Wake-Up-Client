import styled from "styled-components";

export const mainContainer = styled.div`
  width: 100%;
`;

export const headerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #bdb08d;
`;

export const contentContainer = styled.div`
  margin: 0px 250px 0px 250px;
`;

export const searchBox = styled.div`
  width: 80%;
  height: 50px;
  margin: 50px 300px 80px 300px;
`;

export const search = styled.input.attrs({
  type: "text",
  placeholder: "user search",
})`
  &::placeholder {
    font-size: 20px;
  }
  background-image: url("search.png");
  background-position: right;
  background-repeat: no-repeat;
  font-size: 20px;
  width: 50%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 2px solid #bdb08d;
`;
export const rankingBox = styled.div`
  margin: 0px 100px 0px 100px;
  width: 80%;
  height: 500px;
`;

export const profileContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
  margin: 50px 0px 100px 0px;
`;

export const profile = styled.img`
  width: 120px;
  height: 120px;
  background-color: gray;
  border-radius: 50%;
  margin: 35px 0px 0px 60px;
`;

export const circleBox = styled.div`
  position: relative;
  height: 50vh;
  width: 40vw;
  display: inline-block;
  margin-right: 100px;
`;

export const chartBox = styled.div`
  display: inline-block;
  margin-left: 30px;
  position: relative;
  height: 65vh;
  width: 55vw;
`;

export const dataContainer = styled.div`
  height: auto;
  margin: 0px 120px 0px 120px;
  text-align: center;
`;

export const title = styled.h2`
  margin-bottom: 50px;
`;

export const userContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

export const profileBox = styled.div`
  width: 40%;
  height: 100px;
  margin-top: 20px;
`;

export const userImg = styled.img`
  float: left;
  width: 80px;
  height: auto;
`;
export const userInfo = styled.div`
  display: inline-block;
  clear: both;
  margin-left: 20px;
  line-height: 80px;
`;

export const userName = styled.span`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const userId = styled.span`
  font-size: 18px;
  color: #bcbcbc;
  margin-left: 10px;
`;

export const profileGraph = styled.div`
  width: 60%;
  height: 60px;
  margin: 30px 0px 30px 0px;
  border-left: 1px solid black;
`;

export const graphValue = styled.div`
  background-color: coral;
  width: ${(props) => props.width};
  height: 40px;
  margin: 10px 0px 10px 0px;
`;

export const inUser = styled(userInfo)`
  line-height: 180px;
  margin-left: 50px;
`;

export const profileName = styled(userName)`
  font-size: 23px;
`;

export const profileId = styled(userId)`
  font-size: 20px;
`;

export const next = styled.button``;
