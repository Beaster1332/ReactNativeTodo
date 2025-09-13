import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../Interfaces/ReduxRootState";
import EditorFormInput from "./EditorFormInput";

const styles = StyleSheet.create({
    form: {
        rowGap: 12
    }
});

const mapStateToProps = (state: ReduxRootState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

type Props = {};

type PropsWithRedux = Props
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

const EditorForm: React.FC<PropsWithRedux> = props => {
    return <View style={styles.form}>
        <EditorFormInput
            name={"title"}
            placeholder={"Название"}
        />
        <EditorFormInput
            name={"description"}
            placeholder={"Описание"}
            multiline={true}
        />
    </View>;
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorForm);