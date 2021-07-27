import MeetupList from '../components/meetups/MeetupList'
import {useEffect, useState} from 'react'

const AllMeetups = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [meetups, setMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-getting-started-2e369-default-rtdb.firebaseio.com/meetups.json')
            .then(res => res.json())
            .then(data => {
                const meetupsData = []
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }

                    meetupsData.push(meetup)
                }
                setIsLoading(false)
                setMeetups(meetupsData)
            })
    }, [])

    if (isLoading) {
        return (
            <section><p>Loading ...</p></section>)
    }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={meetups}/>
        </section>
    )
}

export default AllMeetups