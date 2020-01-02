import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const testQuery = gql`
    query getMyId {
        me {
            name
        }
    }
`

const First: React.FC = () => {
    const {data, error, loading} = useQuery(testQuery)

    if (error) return <Text>{error}</Text>
    if (loading) return <Text>Loading...</Text>
    console.log(data)
    return (
        <Text>
            Welcome, {data.me.name}
        </Text>
    )
}

const styles = StyleSheet.create({

})

export default First
