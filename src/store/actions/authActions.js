export const UPDATE_REGISTRATION_FIELD = 'UPDATE_REGISTRATION_FIELD'

export const updateRegistrationField = (fieldName, fieldValue) => ({
    type: UPDATE_REGISTRATION_FIELD,
    payload: {
        field: fieldName,
        value: fieldValue
    }
})