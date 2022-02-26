//GLOBAL CSS FOR RESPONSIVE DESIGN
//Imports
import { css } from "styled-components";
//EXPORT
export const Mobile = (props) => {
  return css`
    @media screen and (max-width: 420px) {
      ${props}
    } ;
  `;
};
