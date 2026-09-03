# GPS

This section is a collection of GPS related functions that can be used in various parts of the application.
It contains functionalities for requesting GPS permissions, activating GPS, and obtaining the current coordinates.

## Functions

### getCoords()

```ts { .no-language }
getCoords(timeout, maximum_age): Promise<Position>
```

Gets the current coordinates of the device

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `timeout` | `number` | `10000` | Maximum time (in milliseconds) to wait for a response from the GPS (default: 10000) |
| `maximum_age` | `number` | `10` | - |

#### Returns

`Promise<Position>`

A promise that resolves with the current [position](https://capacitorjs.com/docs/apis/geolocation#position) of the device

***

### requestGPSStatus()

```ts { .no-language }
requestGPSStatus(): Promise<any>
```

Requests gps permission and returns the status after the user has interacted with the message

#### Returns

`Promise<any>`

Possible values: GRANTED, DENIED, DENIED_ONCE, NOT_REQUESTED, DENIED_ALWAYS, RESTRICTED, GRANTED_WHEN_IN_USE;

***

### requestGPSPermission()

```ts { .no-language }
requestGPSPermission(): Promise<boolean>
```

Requests gps permission and when user has denied always it will navigate to app settings

#### Returns

`Promise<boolean>`

Promise with a result of true when gps is granted and false when it isn't

***

### requestGPSActivation()

```ts { .no-language }
requestGPSActivation(): Promise<boolean>
```

Asks user to activate gps

#### Returns

`Promise<boolean>`

Promise with a result of true when gps is activated and false when it isn't

***

### isGPSOff()

```ts { .no-language }
isGPSOff(): Promise<boolean>
```

Checks if the GPS is off, not the permissions but if the gps is active

#### Returns

`Promise<boolean>`

Promise with a result of true when gps is off and false when it isn't
