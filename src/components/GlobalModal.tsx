import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useModalStore } from "../state/modalStore";

export default function GlobalModal() {
  const { visible, content, hideModal } = useModalStore();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={hideModal}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={hideModal}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>{content}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#ECE6F0",
    borderRadius: 10,
    padding: 20,
    minWidth: 250,
    minHeight: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
