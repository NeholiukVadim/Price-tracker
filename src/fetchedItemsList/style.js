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
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  background-color: #1e1c1c;
  `;

const ListTitles = styled(ListedItem)`
  position: sticky;
  top: 0;
`

const ItemImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  object-fit: contain;
`;

const ItemName = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
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