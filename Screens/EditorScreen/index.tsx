import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const EditorScreen = props => {
	return <SafeAreaProvider
		style={{padding: 12}}
	>
		<SafeAreaView>

		</SafeAreaView>
	</SafeAreaProvider>;
};

export default EditorScreen;