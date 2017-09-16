import React, {Component} from 'react';
import MapView from 'react-native-maps';
import Timestamp from 'react-timestamp';
import Icon1 from 'react-native-vector-icons/EvilIcons'
import {
    Card,
    Image,
    View,
    Subtitle,
    Caption,
    Text,
    Divider,
    Button,
    Icon

} from '@shoutem/ui'
import styles from '../Theme/Theme';

import {
    Linking,
    TouchableOpacity,

} from 'react-native';

class Map extends Component {
    onBack = () => {
        this.props.navigator.pop();
    };

    directions = () => {
        console.log('address', this.props.place.lat);
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${this.props.place.name},${this.props.place.address}`)
    }

    render() { //MapView tells map where to focus, MapView.Marker is for the pin.
        return (
                <MapView
                    style={styles.mapContainer}
                    region={{
                        latitude: this.props.place.lat,
                        longitude: this.props.place.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.place.lat,
                            longitude: this.props.place.lng
                        }}>
                        <MapView.Callout>
                            <Card>
                                <Image styleName="medium-wide"
                                       source={{uri: this.props.image}}/>
                            <View styleName="content">
                                <Subtitle>{this.props.place.name}</Subtitle>
                                <Divider styleName="line" />
                                <Text>"{this.props.memory}"</Text>
                                <Divider styleName="line" />
                                <View styleName="horizontal v-center space-between">
                                    <Timestamp time='text' component={Caption}/>
                                    <Button styleName="tight clear"><Icon name="directions" onPress={this.directions.bind(this)}/></Button>
                                </View>
                                <Caption/>
                                <Caption>{this.props.place.address}</Caption>
                            </View>
                            </Card>
                        </MapView.Callout>
                    </MapView.Marker>
                        <TouchableOpacity onPress={this.onBack.bind(this)}>
                            <Icon1 style={styles.mapBackButton} name="close" color="#000"
                                  size={30}/>
                        </TouchableOpacity>
                </MapView>
        );
    }
}

export default Map;