import React, { useEffect, useState } from "react";
import next from "./next.png";
import logo from "./logo.png";
import * as S from "./style";
import User from "./User";

const Ranking = (baseUrl) => {
  let [value, setValue] = useState("");
  let [page, setPage] = useState(1);
  let [users, setUsers] = useState([]);

  const searchChange = (e) => {
    setValue(e.target.value);
  };
  const userSearch = () => {
    if (window.event.keyCode == 13) console.log(value);
  };
  const nextPage = () => {
    setPage(page++);
  };
  const config = {
    header: {},
  };

  useEffect(() => {
    console.log(page);
    // axios.get(baseUrl + "/concentration/retrieve/" + page, config)
    // .then((res) => {
    //   setUsers(res.data)
    //   console.log(res.data);
    // });
  }, [page]);
  return (
    <S.mainContainer>
      <S.headerContainer>
        <S.headerBox>
          <S.logo src={logo} />
          <S.project>Wake up!</S.project>
        </S.headerBox>
      </S.headerContainer>
      <S.contentContainer>
        <S.searchBox>
          <S.search onChange={searchChange} onKeyUp={userSearch} />
        </S.searchBox>
        <S.rankingBox>
          <User />
        </S.rankingBox>
        <S.bottomSection>
          <S.next onClick={nextPage}>
            <S.btnImg src={next} />
          </S.next>
        </S.bottomSection>
      </S.contentContainer>
    </S.mainContainer>
  );
};

export default Ranking;
