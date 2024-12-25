// import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoaderKit from 'react-native-loader-kit';

export default function Loader() {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LoaderKit
                style={{ width: 50, height: 50 }}
                name={'BallScaleMultiple'}
                color={'blue'}
            />
        </SafeAreaView>
    )
}