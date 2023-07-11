import styled from "styled-components";

const ItemsList = styled.div `
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListedItem = styled.div`
  width: 100%;
  padding: 7px 20px;
  box-sizing: border-box;
  display: flex;
  background-color: #1e1c1c;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 440px) {
    font-size: 12px;
    padding: 7px 5px;
  }
  `;

const ListTitles = styled(ListedItem)`
  position: sticky;
  top: 0;
  z-index: 3;
`

const ItemImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  object-fit: contain;
  @media (max-width: 440px) {
    width: 15px;
    height: 15px;
  }
`;

const ItemName = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    justify-content: center;
  }
`;

const ItemNameTitle = styled(ItemName)`
  &:before {
    content: "\\2191";
    font-size: 20px;
    margin-right: 5px;
    display: ${props => props.display === "unset" ? "none" : "block"};
    rotate: ${props => props.rotation === "increase" ? "0" : "180deg"};
  }
`

const ItemPrice = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    width: 60%;
    justify-content: center;
  }
`;

const ItemPriceTitle = styled(ItemPrice)`
  &:before {
    content: "\\2191";
    font-size: 20px;
    margin-right: 5px;
    display: ${props => props.display === "unset" ? "none" : "block"};
    rotate: ${props => props.rotation === "increase" ? "0" : "180deg"};
  }
`

const ItemTrend = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: ${props => props.color};
  @media (max-width: 768px) {
    width: 40%;
    justify-content: center;
  }
`;

const ItemTrendTitle = styled(ItemTrend)`
  color: white;
  
  &:before {
    content: "\\2191";
    font-size: 20px;
    margin-right: 5px;
    display: ${props => props.display === "unset" ? "none" : "block"};
    rotate: ${props => props.rotation === "increase" ? "0" : "180deg"};
  }
`

const ItemLink = styled.a`
`;

const ExaltedCurrencyText = styled.div`
  &:before {
    font-size: 20px;
    margin-right: 5px;
    content: "\\2192";
  }
`;

export {  ItemsList,  ListedItem,  ItemImage, ItemLink, ItemName, ItemNameTitle, ItemPrice, ItemPriceTitle, ItemTrend, ItemTrendTitle, ExaltedCurrencyText, ListTitles }