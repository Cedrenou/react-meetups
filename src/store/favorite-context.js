import {createContext, useState} from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
})

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemsIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}