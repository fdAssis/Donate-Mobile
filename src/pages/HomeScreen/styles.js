import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  header: {
    backgroundColor: '#1A54F8',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 25,
    color: '#FFFFFF',
  },

  headerSearch: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    width: 300,
    height: 50,
    borderRadius: 300 / 2,
    marginTop: 10,
    padding: 10,
    paddingLeft: 25,
    fontSize: 20,
    color: '#323232'
  },

  headerButton: {
    position: 'absolute',
    top: 5,
    left: 250,
    elevation: 3,
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  category: {
    backgroundColor: '#801336',
    position: 'absolute',
    top: 170,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 1000,
    justifyContent: 'space-evenly',
    flexDirection:"row",
  },

  bubCat: {
    backgroundColor: '#FFFFFF',
    width: 80,
    height: 80,
    borderRadius: 40,
  }


})

export default styles;