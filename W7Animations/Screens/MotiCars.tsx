// MotiCars

import React, { useState } from 'react'
import { View, 
    Pressable, 
    FlatList, 
    StyleSheet 
} from 'react-native'
import { 
    Image, 
    MotiView, 
    MotiText, 
    useAnimationState, 
} from "moti";
import { useWindowDimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'

interface Car {
    color: string; 
    colorBg: string; 
    name: string; 
    image: string; 
    price: string
}

const cars: Car[] = [
    {
        color: '#fff',
        colorBg: '#2b3832',
        name: 'Mustang Mach 1',
        price: 'R$ 523.950',
        image: 'https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/media-carousels/showroom/_jcr_content/par/mediacarouselitem/image.imgs.full.high.jpg/1620163710118.jpg'
    },
    {
        color: '#fff',
        colorBg: '#690808',
        name: 'Bronco Sport',
        price: 'R$ 264.690',
        image: 'https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/media-carousels/showroom/_jcr_content/par/mediacarouselitem_38717309/image.imgs.full.high.jpg/1620754954007.jpg'
    },
    {
        color: '#fff',
        colorBg: '#202ba8',
        name: 'Novo Edge ST',
        price: 'R$ 351.950',
        image: 'https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/media-carousels/showroom/_jcr_content/par/mediacarouselitem_1172068228/image.imgs.full.high.png/1620138051502.png'
    },
    {
        color: '#FDFAF6',
        colorBg: '#47443d',
        name: 'Nova Ranger 2022',
        price: 'R$ 179.790',
        image: 'https://www.ford.com.br/content/ford/br/pt_br/site-wide-content/media-carousels/showroom/_jcr_content/par/mediacarouselitem_1575839931/image.imgs.full.high.jpg/1620137999130.jpg'
    }
]

const MotiCars = () => {
    const [pressed, setPressed] = useState(false)
    const { height, width } = useWindowDimensions();
return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <LinearGradient
                colors={['#68058D00', '#1B0824', '#1B0824', '#68058D00']}
                locations={[0, 0.3, 0.7, 1]}
                style={StyleSheet.absoluteFill}
            />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={[...cars]}
                renderItem={({ item, index }) => {
                    return <View style={{
                        flex: 1, height, width: width, justifyContent: 'center',
                        alignItems: 'center', overflow: 'visible'
                    }}>
                        <Cards item={item} />
                    </View>
                }}
            />
</View>
    )
}
const Cards = ({ item }: { item: Car }) => {
    const { height, width } = useWindowDimensions();
    const [open, setOpen] = useState(false);
    const state = useAnimationState({
        from: {
            opacity: 1,
            translateY: 30,
            translateX: 50,
            scale: 1.9,
            rotate: '-10deg',
            // rotate: '-20deg',
            // rotate: '-90deg',
            // rotate: '-270deg',
        },
        to: {
            opacity: 1,
            translateX: 0,
            backgroundColor: item.color,
            scale: 1,
            translateY: 0,
            rotate: '0deg'
        }
    })
    const Mainstate = useAnimationState({
        from: {
            //scale: 1.2,
            translateY: 50,
            backgroundColor: item.colorBg, //item.color,
            height: height * 0.6,
            width: width * 0.8,
        },
        to: {
            //scale: 1,
            translateY: 40,
            backgroundColor: item.colorBg,
            height: width * 0.5,
            width: width * 0.6,
        }
    })
    return <Pressable
        onPress={() => {
            if (state.current == "from") {
                state.transitionTo('to')
                Mainstate.transitionTo('to')
                setOpen(false)
            } else {
                Mainstate.transitionTo('from')
                state.transitionTo('from')
                setOpen(true)
            }
        }}>
        <MotiView
            state={state}
            transition={{
                type: 'timing',
                duration: 500
            }}
            style={{
                height: width * 0.5,
                overflow: 'hidden', zIndex: 50, position: 'absolute',
                width: width * 0.6, borderRadius: 16, padding: 0, left: -20
            }} >
            <Image
                resizeMode='contain'
                style={[StyleSheet.absoluteFillObject, {width: width * .6, left: 0}]} source={{ uri: item.image }} />
        </MotiView>
        <MotiView
            state={Mainstate}
            style={{
                backgroundColor: '#C490E4', borderRadius: 16, position: 'relative'
            }} >
            {!open ? <View style={[{
                position: 'absolute', bottom: 10,
                justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',
                paddingHorizontal: 16,
            }]}>
            <MotiText style={{
                    fontWeight: '700', color: item.color, textAlign: 'center',
                    fontSize: 18, backgroundColor: 'transparent', width: width * 0.42,
            }}>
                {item.name}
            </MotiText>
            </View> : <CarDetail item={item} />}
        </MotiView>
    </Pressable>
}
const CarDetail = ({ item }: { item: Car }) => {
    const { height, width } = useWindowDimensions();
    return <MotiView
    transition={{
                type: "spring",
                // duration: 300,
            }}
            from={{
                translateY: -300,
                opacity: 0
            }}
            animate={{
                translateY: 0,
                opacity: 1
            }}
            exit={{
                translateY: -300,
                opacity: 0
    }}
            style={{
                justifyContent: 'flex-end', height: height * 0.65,
                paddingHorizontal: 30, paddingVertical: 20, paddingBottom: 100
            }}>
            <MotiText style={{
                fontSize: 28, fontWeight: '600', color: item.color,
            }}>
                {item.name}
            </MotiText>
            <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', }}>
                {/* <FontAwesome color={item.color} name='tags' size={20} /> */}
                <MotiText style={{
                    fontSize: 18, fontWeight: '400', color: item.color, marginHorizontal: 5
                }}>
                    {item.price}
                </MotiText>
            </View>
            {/* <View style={{
                height: 60, paddingHorizontal: 30, backgroundColor: 'black', borderRadius: 8,
                justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
            }}>
                <MotiText style={{ fontSize: 18, fontWeight: '400',color: '#fff' }}>
                    Mais detalhes</MotiText>
                <FontAwesome color='white' name='long-arrow-right' />
            </View> */}
    </MotiView>
}

export default MotiCars