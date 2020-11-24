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
  margin: ${(props) => {
    if (props.data) return "0px 320px 0px 320px";
    else return "0px 250px 0px 250px";
  }};
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
export const headerBox = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 40px;
`;
export const logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const project = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const rankingBox = styled.div`
  margin: 0px 100px 0px 100px;
  width: 80%;
  height: 500px;
`;

export const profileContainer = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 5px 5px 10px #acacac;
  display: flex;
  margin: 50px 0px 100px 0px;
  border-radius: 30px;
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
  width: 43vw;
  display: inline-block;
  margin-right: 100px;
`;

export const chartBox = styled.div`
  display: inline-block;
  position: relative;
  height: 65vh;
  width: 45vw;
`;

export const dataContainer = styled.div`
  height: auto;
  margin: 0px 120px 0px 120px;
  text-align: center;
`;

export const title = styled.h2`
  margin: 0px 0px 100px 175px;
  width: 45%;
  border-bottom: 2.4px solid gray;
`;

export const userContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 5px 10px #8a8a8a;
    border: none;
    index: 1;
  }
  padding: 15px;
`;

export const profileBox = styled.div`
  width: 42%;
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
  margin: 10px 0px 0px 17px;
  line-height: 32px;
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
  width: 50%;
  height: 60px;
  margin: 30px 0px 30px 75px;
  border-left: 1px solid black;
`;

export const graphValue = styled.div`
  background-color: #d6ae76;
  width: ${(props) => props.width};
  height: 40px;
  margin: 10px 0px 10px 0px;
  @keyframes appear {
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.width}px;
    }
  }
  animation-name: appear;
  animation-duration: 2s;
`;

export const inUser = styled(userInfo)`
  line-height: 35px;
  margin: 60px 0px 0px 50px;
`;

export const profileName = styled(userName)`
  font-size: 23px;
`;

export const profileId = styled(userId)`
  font-size: 20px;
`;

export const next = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  float: right;
`;

export const btnImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const bottomSection = styled.div`
  height: 200px;
`;

export const school = styled.span`
  display: block;
  font-size: 15px;
  font-weight: bold;
`;

export const value = styled.p`
  font-size: 18px;
  float: right;
  margin: 7px 8px 0px 0px;
`;
