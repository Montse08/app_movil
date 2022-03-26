import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, HeaderScreen } from "../../../components";
import { DataCalendar } from "../../../utils";

const CalendarScreen = () => {
    const [data, setData] = useState(DataCalendar);

    return (
        <View style={{ flex: 1 }}>
            <HeaderScreen title="Calendario" />
            <Calendar data={data} />
        </View>
    );
}

export default CalendarScreen;