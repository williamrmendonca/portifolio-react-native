import { Feather } from '@expo/vector-icons';
import { 
    MotiView, 
    motify, 
    MotiText, 
    AnimatePresence, 
    useAnimationState 
} from 'moti';
import React, { useEffect, useState } from 'react'
import { 
    View, 
    useWindowDimensions, 
    Pressable 
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
const MotiIcon = motify(Feather)();
const MotiFAIcon = motify(FontAwesome5)();


const MotiCartButton = () => {
    const { height, width } = useWindowDimensions();
    const [start, setStart] = useState(false);
    return (
        <View style={{ 
            flex: 1,
            paddingVertical:50,
            backgroundColor:'#FFE5E2', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height, 
            width 
        }}>
            <Pressable 
            style={{alignItems:'center'}}
            onPress={() => setStart(s => !s)}>
                <AnimatePresence >
                  {start && <ProductIcon setStart={setStart} start={start} key="product" />}
                  </AnimatePresence>
                    <MotiView 
                        animate={{backgroundColor:start?'#907FA4':'#000'}}
                        transition={{type:'timing',duration:500}}
                        key="button" style={{ height: 70,overflow:'hidden', 
                        width: 300, alignItems: 'center', paddingHorizontal: 20, borderRadius: 10, flexDirection: 'row' }}>
                            <CartIcon setStart={setStart} start={start} key="cart-icon" />
                            <AnimatePresence exitBeforeEnter>
                                {!start && <Label key="label" />}
                            </AnimatePresence>
                    </MotiView>
                
            </Pressable>
        </View>
    )
}

const CartIcon = ({ start ,setStart }) => {
useEffect(() => {
if (start == false) {
            scaleIn.transitionTo('animate')
        } else {
            setTimeout(() => {
            scaleIn.transitionTo('middle')
            setTimeout(() => {
                scaleIn.transitionTo('exit')
                setTimeout(() => {
                    setStart(false) 
                }, 500);
                
            },800);
        },500);
        }
        return () => {
}
    }, [start])
    const scaleIn = useAnimationState({
        from:{
            scale: [0,1],
            translateX: 0, 
            opacity: [0,1]
        },
        animate: {
            scale: 1,
            translateX: 0, opacity: [0.8,1],
            color:'#fff'
        },
        middle: {
            scale: [1.9,1,1.9],
           
            rotate:'12 deg',
translateX: 120, opacity: 1,
            color:'#21094E'
},
        exit: {
            scale: [0.8,0],
            
            translateX: 300, 
            opacity: 0,
            color:'#000'
},
    })
    return <MotiIcon
       
        transition={{
            type: 'timing',
            duration:500
        
        }}
        
        state={scaleIn}
        name='shopping-cart' size={24} color="#fff" />
}
const ProductIcon = ({ start ,setStart }) => {
return <MotiFAIcon
    from={{ translateY: -50, opacity: 0 }}
       
        animate={ {
            scale: [0.8,1],
            translateY: [-50,50], 
            opacity: 1,
           
        }}
       
        transition={{
            type: 'timing',
            duration:500
        
        }}
        
style={{
    color:'#0A1931'}}
        name='tshirt' size={24}  />
}
const Label = () => {
    return <MotiText
        transition={{
            type: 'timing',
}}
        from={{ translateX: -50, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 50, opacity: 0 }}
        style={{ color: '#fff', marginHorizontal: 30, fontSize: 18 }}>Adicionar ao carrinho </MotiText>
}
export default MotiCartButton