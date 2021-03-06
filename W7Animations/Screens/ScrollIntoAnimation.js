// ScrollIntoAnimation

/*
    Inspiration: https://dribbble.com/shots/5402223-Wander-app-interactions-2
*/
import * as React from 'react';
import { Animated, 
    View, 
    Dimensions, 
} from 'react-native';
import { 
    View as MView, 
    Text as MText, 
    useAnimationState 
} from 'moti';
import faker from 'faker';
import { StatusBar } from 'expo-status-bar';
faker.seed(10);
const {width, height} = Dimensions.get('screen');

const _image = `https://images.pexels.com/photos/693857/pexels-photo-693857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const _heightOffset = height * .25;

export default function ScrollingEffectV1() {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();

    const opacity = scrollY.interpolate({
        inputRange: [0, height-_heightOffset],
        outputRange: [1, 0]
    })
    const opacityReversed = scrollY.interpolate({
        inputRange: [0, height-_heightOffset],
        outputRange: [0, 1]
    })
    const scale = scrollY.interpolate({
        inputRange: [0, height-_heightOffset],
        outputRange: [1, 2],
        extrapolateLeft: 'clamp'
    })

    
    const useFadeInDown = useAnimationState({
          from: {
            opacity: 0,
            translateY: 200,
          },
          to: {
            opacity: 1,
            translateY: 0,
          },
        })

    React.useEffect(() => {
        scrollY.addListener(({value}) => {
            if (value >= height-_heightOffset) {
                useFadeInDown.transitionTo('to')
                return;
            }

                useFadeInDown.transitionTo(state => {
                    if (state === 'to') {
                        return 'from';
                    }
                })

            // Uncomment this if you'd like to blur the image while hitting the threshold. iPhone only
            // ref?.current?.setNativeProps({
            //     blurRadius: Math.round(value / 30)
            // })
        })

        // return () => {
        //     scrollY.removeAllListeners();
        // }
    }, [])


    return (
        <Animated.ScrollView
            snapToOffsets={[height-_heightOffset, height-_heightOffset + 1, height-_heightOffset + 2]}
            decelerationRate='fast'
            contentContainerStyle={{paddingTop: height - _heightOffset}}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                { useNativeDriver: true }
            )}
        >
            <StatusBar hidden/>
            <View style={{width, height, position: 'absolute', top: 0, left: 0, overflow: 'hidden'}}>
                <Animated.Image
                    ref={ref}
                    source={{uri: _image}}
                    style={{flex: 1, opacity, transform: [{scale}]}}
                />
                {/* <Animated.View
                    ref={ref}
                    // source={{uri: _image}}
                    style={{flex: 1, backgroundColor: '#212121' , opacity, transform: [{scale}]}}
                /> */}

            </View>
            <View style={{padding: 20, minHeight: height }}>
                <View style={{alignItems: 'center', height: _heightOffset, justifyContent: 'center'}}>
                    <Animated.Text style={{fontSize: 12, textTransform: 'uppercase', fontWeight: '800', letterSpacing: 4, marginBottom: 10, color: 'white', opacity}} numberOfLines={1} adjustsFontSizeToFit>15/SET/2021</Animated.Text>
                    <View>
                    <Animated.Text style={{fontSize: 48, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 8, color: 'white', opacity}} numberOfLines={1} adjustsFontSizeToFit>turismo rural</Animated.Text>
                    <Animated.Text style={{fontSize: 48, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 8, position: 'absolute', opacity: opacityReversed}} numberOfLines={1} adjustsFontSizeToFit>turismo rural</Animated.Text>
                    </View>
                </View>
                <MText transition={{delay: 0}} state={useFadeInDown} key={1} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    Est?? em busca de uma experi??ncia diferente? O turismo rural ?? excelente alternativa para fugir da rotina e viver o dia a dia do campo. De b??nus, voc?? ainda contribui para o crescimento de um dos segmentos tur??sticos mais bacanas.
                </MText>
                <MText transition={{delay: 50}} state={useFadeInDown} key={2} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    Voc?? sabia que mais de 80% da popula????o brasileira vive em cidades? Se o ritmo acelerado dos centros urbanos ?? a realidade da maioria, a busca por tranquilidade tamb??m. ?? por isso que as iniciativas voltadas ao turismo rural t??m crescido em oferta e em p??blico.
                </MText>


                <MView transition={{delay: 250}} state={useFadeInDown} key={2.5} style={{marginTop: 20, marginBottom: 20, backgroundColor: '#212121', height: 50, width: '100%'}}>
                </MView>



                <MText transition={{delay: 300}} state={useFadeInDown} key={3} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    Um final de semana no campo ?? a oportunidade que muitos buscam para fugir da rotina das cidades, descansar em meio ?? natureza e, especialmente, resgatar as ra??zes. Hoje somos urbanos, mas at?? um passado n??o muito distante, o meio rural era nossa realidade.
                </MText>
                <MText transition={{delay: 350}} state={useFadeInDown} key={4} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    Para ajudar voc?? a entender melhor o assunto, explicamos nesse post o que ?? turismo rural e qual a import??ncia desse segmento. E para incentivar a viagem rumo ao interior, selecionamos tamb??m 8 destinos ideais para curtir a tranquilidade, resgatar a hist??ria e voltar ??s origens.
                </MText>
                <MText transition={{delay: 400}} state={useFadeInDown} key={5} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    De acordo com o Minist??rio do Turismo, turismo rural ?? ???o conjunto de atividades tur??sticas desenvolvidas no meio rural, comprometido com a produ????o agropecu??ria, agregando valor a produtos e servi??os, resgatando e promovendo o patrim??nio cultural e natural da comunidade???.
                </MText>
                <MText transition={{delay: 450}} state={useFadeInDown} key={6} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>
                    Para o visitante, em termos de possibilidade do que fazer, o turismo rural pode envolver estadia em hotel-fazenda, refei????es elaboradas com alimentos org??nicos e pr??tica de atividades recreativas, esportivas e de lazer. Pode envolver tamb??m o acompanhamento da produ????o agr??ria e, muitas vezes, compra de alimentos feitos com base nesses produtos. 
                </MText>
                {/* {[...Array(10).keys()].map((index) => (
                    <MText transition={{delay: 50 * index}} state={useFadeInDown} key={faker.random.uuid()} style={{marginBottom: 20, fontSize: 16, lineHeight: 24, fontFamily: 'Georgia'}}>{faker.lorem.sentences(faker.random.number(3) + 2)}</MText>
                ))} */}
            </View>
        </Animated.ScrollView>
    )
}