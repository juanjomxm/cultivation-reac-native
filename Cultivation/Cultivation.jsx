import React from "react";
import axios from "axios";
import {Text, View, TouchableOpacity, ScrollView, Image, Linking, TextInput} from "react-native";

const Soccer = ()=>{
    const [dataSoccer, setDataSoccer] = React.useState([])
    const [inputData, setInputData] = React.useState('')

    const axiosData = axios.create({
        baseURL: "https://free-football-soccer-videos.p.rapidapi.com/",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-RapidAPI-Key': 'ff9ffd5791msh6da170c435b05cap15c41djsnb9ef3b60b095',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
    })
    
    React.useEffect(()=>{
        const viewGames = async()=>{
            const {data, status} = await axiosData.get()
            try{
                if(status === 200, 201){
                    setDataSoccer(data)
                }
            }catch(error){
                console.warn(error)
            }
        }
        viewGames()
    }, [])

    const searchGame = dataSoccer.filter(item =>{
        return item.title.includes(inputData)
    })

    return(
        <View>
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <TextInput
                style={{width: '50%', // Ancho del input
                height: 40,
                borderColor: 'green',
                borderWidth: 1,
                paddingLeft: 10,
                paddingRight: 10,
                color: 'white'
                }}
                value={inputData}
                onChangeText={setInputData} // En React native no hay necesidad de escrbir la funcion con el argumento event, solo se coloca de inmediato el actualizador del input
                placeholder="Buscar partido"
                />
            </View>

            <ScrollView style={{marginTop: 20,}}>
                {searchGame.map((item,index)=>(
                    <View 
                    key={index}
                    style={{marginBottom:20, justifyContent: 'center', alignItems: 'center',}}
                    >  
                        <Text style={{color:'white'}}>{item.competition.name}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                        <Image
                        source={{uri: item.thumbnail}}
                        style={{ width: 100, height: 100 }}
                        />

                        <TouchableOpacity 
                        onPress={()=>Linking.openURL(item.url)}
                        >
                            <Text style={{color:'white'}}>Resumen</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            
        </View>
    )
}

export default Soccer 