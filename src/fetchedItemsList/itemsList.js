import { useSelector, useDispatch } from "react-redux";
import { ItemsList,  ListedItem,  ItemImage, ItemLink, ItemName, ItemNameTitle, ItemTrend, ItemTrendTitle, ItemPrice, ItemPriceTitle, ExaltedCurrencyText, ListTitles } from "./style";
import { sortByPrice, sortByTrend, sortByItemName } from "../itemsFetchSlice";

const FetchedItemsList = (props) => {

    const dispatch = useDispatch()
    const itemsList = useSelector(state => state.fetchedList.itemsList)
    const nameFilterState = useSelector(state => state.fetchedList.itemsNamesFilterState)
    const priceFilterState = useSelector(state => state.fetchedList.priceFilterState)
    const trendFilterState = useSelector(state => state.fetchedList.trendFilterState)


    const itemTrendColorChange = (value) => {
        if (value > 0) {
            return "green"
        }
        if (value === 0){
            return "white"
        }
        else {
            return "red"
        }
    }

    return (
        <ItemsList>
            <ListTitles>
                <ItemNameTitle display={nameFilterState} rotation={nameFilterState}  onClick={() => dispatch(sortByItemName())}>Name</ItemNameTitle>
                <ItemPriceTitle display={priceFilterState} rotation={priceFilterState} onClick={() => dispatch(sortByPrice())}>Price</ItemPriceTitle>
                <ItemTrendTitle display={trendFilterState} rotation={trendFilterState} onClick={() => dispatch(sortByTrend())}>Price trend</ItemTrendTitle>
            </ListTitles>

            {
                itemsList.length ? itemsList.filter((item) => {
                    return props.search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(props.search)
                }).map(item =>
                    <ItemsList>
                        <ListedItem>
                            <ItemName>
                              <ItemImage src={item.icon}/>
                              <ItemLink>{item.name}</ItemLink>
                            </ItemName>
                            <ItemPrice>
                                {item.mean}
                                <ItemImage
                                    src={"https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&w=1&h=1"}/>
                                <ExaltedCurrencyText>{item.exalted}</ExaltedCurrencyText>
                                <ItemImage
                                    src={"https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/b102771c23/CurrencyAddModToRare.png"}/>
                            </ItemPrice>
                            <ItemTrend color={itemTrendColorChange(item.change)}>
                                {item.change + "%"}
                            </ItemTrend>
                        </ListedItem>
                    </ItemsList>
                ) : <ItemsList>Loading...</ItemsList>
            }
        </ItemsList>
    )
}

export { FetchedItemsList }