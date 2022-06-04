import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native'
import Svg, {
    Path,
  } from 'react-native-svg';

class Countdown extends React.Component {
 
    state = {
        seconds: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            moment.locale('en')
            const now = moment();
            const countdown = moment(then - now);
            const seconds = countdown.format('ss')
            const minutes = countdown.format('mm')
            const hours = countdown.format('HH')
            const days = countdown.format('D')
            this.setState({ days, hours, minutes, seconds }); 
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
        clearInterval(this.interval)
        }
    }

    render() {
        const { seconds, days, hours, minutes } = this.state;
        
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const daysRadius = mapNumber(days, 31, 0, 0, 360);

        if (!seconds) {
            return null;
        }
        if (!days) {
            return null;
        }
        
        return (
           
                <View style={styles.countdownWrapper}>
                    {days && (
                        <View style={styles.countdownItem}>
                            <SVGCircle radius={daysRadius} />
                            <Text style={styles.cardText}>{days}d</Text>
                        </View>
                    )}
                    {hours && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={hoursRadius} />
                            <Text style={styles.cardText}>{hours}h</Text>
                        </View>
                    )}
                    {minutes && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={minutesRadius} />
                        <Text style={styles.cardText}>{minutes}m</Text>
                        </View>
                    )}
                    {seconds && (
                         <View style={styles.countdownItem}>
                            <SVGCircle radius={secondsRadius} />
                            <Text style={styles.cardText}>{seconds}s</Text>
                        </View>
                    )}
                </View>
               
        )
    }
}

export default Countdown

const SVGCircle = ({ radius }) => (
    <Svg style={styles.countdownSvg}>
        <Path
            fill="none"
            stroke="white"
            strokeWidth="4"
            d={describeArc(50, 50, 28, 0, radius)}
        />
    </Svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
    
    return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

const styles = StyleSheet.create({
    countdownSvg: {
        marginBottom: 10,
        width: 100,
        height: 100,
        position: 'absolute',
    },
    countdownWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'around',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    countdownItem: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingTop: 5,
        position: 'relative',
        flexDirection: 'column',
        width: 80,
        height: 80,
    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    }
  });
  