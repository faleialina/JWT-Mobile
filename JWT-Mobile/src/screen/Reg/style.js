import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#F0F4F3',
		alignItems: 'center',
	},
	card: {
		width: '80%',
		height: '80%',
		flex: 1,
		flexDirection: 'column',
		gap: '20px',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: 170,
		resizeMode: 'contain',
	},
	input: {
		width: '70%',
		backgroundColor: '#FFFFFF',
		borderRadius: '100px',
		paddingVertical: '15px',
		paddingHorizontal: '25px',
	},
	btn: {
		width: '80%',
		paddingVertical: '20px',
		backgroundColor: 'red',
		borderRadius: '20px'
	},
	btnText:{
		textAlign: 'center',
	},
	textSignUp:{
		color: 'red'
	}
})
export default styles
