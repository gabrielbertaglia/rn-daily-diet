import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface KeyboardAvoidingContainerProps {
  children: React.ReactNode
}

export function KeyboardAvoidingContainer({
  children,
}: KeyboardAvoidingContainerProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>{children}</ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
