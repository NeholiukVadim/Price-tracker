import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchedItemsList } from "./fetchedItemsList/itemsList";
import { fetchItems } from "./itemsFetchSlice";
import { changeCategory, changeLeague } from "./itemsFetchSlice";

import { AppContainer, ContentContainer, LeagueSelection, ItemSearchBar, CategoriesList, CategoryItem,  CategoryItemImage, CategoryLink } from "./style";

const App = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("")

    const category = useSelector(state => state.fetchedList.category)
    const league = useSelector(state => state.fetchedList.league)

    useEffect(() => {
        dispatch(fetchItems({category: category, league: league}));
        setSearch("")
    }, [category, league]);

  return (
      <AppContainer>
        <ContentContainer>
            <LeagueSelection onChange={e => dispatch(changeLeague(e.target.value))}>
                <option value={"Crucible"}>Crucible</option>
                <option value={"Standard"}>Standard</option>
                <option value={"Hardcore%20Crucible"}>Hardcore Crucible</option>
            </LeagueSelection>
            <ItemSearchBar onChange={(e) => setSearch(e.target.value)} value={search} placeholder={"search..."}></ItemSearchBar>
            <CategoriesList>
                <CategoryItem>
                    General
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("currency"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&w=1&h=1"} />
                    <CategoryLink>Currency</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("fragment"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Maps/Vaal01.png?v=3b21ce0cd4c0b9e8cf5db6257daf831a&w=1&h=1&scale=1"} />
                    <CategoryLink>Fragments</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("fossil"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/Delve/FracturedFossil.png?v=11a6519b4c00c8660d5df8f19e692976&w=1&h=1&scale=1"} />
                    <CategoryLink>Fossils</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("oil"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/Oils/GoldenOil.png?v=7640c249d21dbddf0425727a2ff9b4cf&w=1&h=1&scale=1"} />
                    <CategoryLink>Oils</CategoryLink>
                </CategoryItem>
                <CategoryItem>
                    Equipment
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("accessory"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Amulets/AssassinUnique.png?v=e60041dda1c2c14bfaffcf1283eecea0&w=1&h=1&scale=1"} />
                    <CategoryLink>Unique Accessories</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("armour"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Armours/BodyArmours/AvianBodyArmour.png?v=09ce3f04a672364ee31ae2694ea0b558&w=2&h=3&scale=1"} />
                    <CategoryLink>Unique Armour</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("weapon"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/TwoHandSwords/Starforge.png?v=0ccd07f328eefaaf0dfa139d1912457b&w=2&h=4&scale=1"} />
                    <CategoryLink>Unique Weapons</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("jewel"))}>
                <CategoryItemImage src={"https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0VsZGVySmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/278c673716/ElderJewel.png"} />
                <CategoryLink>Unique Jewels</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("flask"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtc1wvRmxhc2tzXC9Cb3R0bGVkUHVyaXR5IiwidyI6MSwiaCI6Miwic2NhbGUiOnRydWUsImxldmVsIjoxfV0/fb9e36a285/Item.png"} />
                    <CategoryLink>Unique Flasks</CategoryLink>
                </CategoryItem>
                <CategoryItem>
                    Consumables
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("essence"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Ib3Jyb3IxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/748d594bde/Horror1.png"} />
                    <CategoryLink>Essences</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("scarab"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/NormalScarabBreach.png?v=16863ac16af551ed800fa73b404260b9&w=1&h=1&scale=1"} />
                    <CategoryLink>Scarabs</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("deliriumOrb"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/Delirium/DeliriumOrbScarabs.png?v=2e2437a4994b36a24f97dbf6e763f522&w=1&h=1&scale=1"} />
                    <CategoryLink>Delirium Orbs</CategoryLink>
                </CategoryItem>
                <CategoryItem onClick={() => dispatch(changeCategory("beast"))}>
                    <CategoryItemImage src={"https://web.poecdn.com/image/Art/2DItems/Currency/BestiaryOrbFull.png?v=0d0f6c8509eaf231513fc8b9a5df4626&w=1&h=1&scale=1"} />
                    <CategoryLink>Beasts</CategoryLink>
                </CategoryItem>
            </CategoriesList>
            <FetchedItemsList search={search}></FetchedItemsList>
        </ContentContainer>
      </AppContainer>
  );
}

export default App;
