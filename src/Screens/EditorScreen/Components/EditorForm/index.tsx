import React from "react";
import {
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
	View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../Interfaces/ReduxRootState";
import EditorFormInput from "./EditorFormInput";

const styles = StyleSheet.create({
	form: {
		flex: 1,
		rowGap: 12
	}
});

const mapStateToProps = (state: ReduxRootState) => (
	{}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{},
	dispatch
);

type Props = {};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const EditorForm: React.FC<PropsWithRedux> = props => {
	return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
		<View style={ styles.form }>
			<EditorFormInput
				name={ "title" }
				placeholder={ "Название" }
			/>
			<EditorFormInput
				name={ "description" }
				placeholder={ "Описание" }
				multiline
			/>
		</View>
	</TouchableWithoutFeedback>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorForm);