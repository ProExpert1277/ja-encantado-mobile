import { StyleSheet, View, Text, Image, FlatList, TextInput, Button } from 'react-native';

const DATA = [
  {
    id: '1', descricao: 'BATATA'
  },
  {
    id: '2', descricao: 'Bola de futebol'
  },
  {
    id: '3', descricao: 'Batata'
  },
  {
    id: '4', descricao: 'Banana'
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.capa}
        source={require('@/assets/images/capa.jpg')}
      />
      <View style={styles.containerCabecalho}>
        <Text style={styles.cabecalho}>Lista de compras</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          inputMode='text'
          placeholder='Digite o item para adicionar a lista'
          placeholderTextColor={'#428df5'}
        />
        <Button 
          title="Adicionar"
          color="#428df5"
        />
      </View>
      <FlatList
        style={styles.containerLista}
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textoLista}>• {item.id} - {item.descricao}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3c',
    justifyContent: 'flex-start',
    marginTop: 30
  },
  containerCabecalho: {
    alignItems: 'center'
  },
  capa: {
    width: '100%',
    height: 200
  },
  cabecalho: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textoLista: {
    color: '#FFF',
    fontSize: 15
  },
  containerLista: {
    padding: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FFF'
  },
});
