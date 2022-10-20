import { Fab, Icon, Pressable, IFabProps } from "native-base";
import Colors from "../utils/styles/Colors";
import { AntDesign } from '@expo/vector-icons';

type props = IFabProps;

export const AddButton = ({ ...rest }: props) => <Fab
    backgroundColor={Colors.darkBlue}
    _pressed={{ backgroundColor: Colors.lightBlue }}
    renderInPortal={false} shadow={2} size="sm"
    icon={<Icon color={Colors.white} as={AntDesign} name="plus" size="sm" />}
    {...rest}
/>


