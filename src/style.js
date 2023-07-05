import styled from "styled-components";
import  background from "./images/Price_tracker_wallpaper.jpg";

const AppContainer = styled.div `
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
`;

const ContentContainer = styled.div `
  max-width: 97vw;
  height: 80vh;
  margin-top: 100px;
  display: grid;
  grid-template-columns: minmax(130px, 12vw) minmax(0, 90vw);
  grid-template-rows: 50px 85%;
  row-gap: 20px;
`;

const LeagueSelection = styled.select `
  color: #c7c4c4;
  background-color: #1e1c1c;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemSearchBar = styled.input `
  width: 98%;
  justify-self: end;
  padding-left: 20px;
  box-sizing: border-box;
  color: #c7c4c4;
  background-color: #1e1c1c;
  border-radius: 5px;
`

const CategoriesList = styled.div `
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #c7c4c4;
`;

const CategoryItemImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  object-fit: contain;
`;

const CategoryLink = styled.a`
  cursor: pointer;
`;

export { AppContainer, ContentContainer, LeagueSelection, ItemSearchBar, CategoriesList,  CategoryItem,  CategoryItemImage, CategoryLink }