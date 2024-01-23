import React from "react";
import * as S from "./style";

const Suggesstion: React.FC = () => {
  return (
    <S.SuggestionBox>
      <S.ProfileImage src="/images/user_profile_img.png" />
      <S.SugestionDetails>
        <div>
          <p>Ranbir</p>
          <p>ranbir@fanxo</p>
        </div>
      </S.SugestionDetails>
    </S.SuggestionBox>
  );
};

export default Suggesstion;
