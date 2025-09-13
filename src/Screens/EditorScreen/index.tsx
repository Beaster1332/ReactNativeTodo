import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import AddButton from "../../Shared/AddButton";
import EditorForm from "./Components/EditorForm";

type Props = {};

const EditorScreen: React.FC<Props> = props => {
	return <SafeAreaProvider
		style={{
			padding: 12,
			backgroundColor: "white"
		}}
	>
		<SafeAreaView style={{
			justifyContent: "space-between",
			height: "100%"
		}}>
			<EditorForm />
			<AddButton
				onPress={() => {}}
				headerTitle={"sdfds"}
				buttonText={"Создать задачу"}
			/>
		</SafeAreaView>
	</SafeAreaProvider>;
};

export default EditorScreen;