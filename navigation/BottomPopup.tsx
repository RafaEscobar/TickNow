import React from 'react'
import { Modal, Dimensions, TouchableWithoutFeedback, View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const deviceHeight = Dimensions.get('window').height;
export class BottomPopup extends React.Component<any, any>{
    
    constructor(props: any){
        super(props);
        this.state={
            show: true,
        }
    }
    // Para mostrar MODAL
    show = () => {
        this.setState({ show: true });
    }
    // Para ocultar MODAL
    close = () => {
        this.setState({ show: false });
    }
    
    // BIEN 
    renderOutsideTouchable(onTouch:any){
        const view = <View style={ styles.view_modal } />
        
        if(!onTouch) return view;

        return(
            <TouchableWithoutFeedback onPress={onTouch} style={ styles.touchable_modal } >
                { view }
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const {title} = this.props;
        return(
            <View style={ styles.view_modal_inter_txt } >
                        {title}
            </View>
        )
    }

     renderContent = () => {
        const {data} = this.props;
        return(
            <View>
                <FlatList 
                    style={ styles.my_list }
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={ this.renderItem }
                    extraData={data}
                    keyExtractor={( item, index ) => index.toString()}
                    ItemSeparatorComponent={ this.renderSeparator }
                    contentContainerStyle={{
                        paddingBottom: 40,
                    }}
                 />
            </View>
        )
    }

    renderItem = ({item}: {item: FlatList} ) => {
        return(
            <View>
                <Text> de </Text>
            </View>
        )
    }

    renderSeparator = ():any => {
        <View style={ styles.view_separator } />
    }

    render(){

        let {show} = this.state;

        const { onTouchableOutside, title } = this.props;

        return( 
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={ styles.container }>
                    { this.renderOutsideTouchable(onTouchableOutside)}
                    <View style={ styles.view_modal_inter }>
                        { this.renderTitle() }
                        { this.renderContent() }
                    </View>
                </View>
            </Modal>
        )
    }

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000AA',
        justifyContent: 'flex-end',
        
    },

    view_modal: {
        flex: 1, 
        width: '100%',
    },

    touchable_modal: {
        flex: 1,
        width: '100%',
    },

    view_modal_inter: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 10,
        maxHeight: deviceHeight*0.4,
    },

    view_modal_inter_txt: {
        color: '#182E44',
        fontSize: 20,
        fontWeight: '500',
        margin: 15,
    },

    my_list: {
        marginBottom: 20,
    },

    view_separator: {
        opacity: 0.1,
        backgroundColor: '#183544',
        height: 1,
    }
});