package middleware

import (
	"github.com/go-playground/validator/v10"
)

type ErrorResponse struct {
	FailedField string
	Tag         string
	Value       string
	Error       string
}

var validate = validator.New()

// create a custom validator middleware
func ValidationMiddleware(c interface{}) []*ErrorResponse {
	var errors []*ErrorResponse
	err := validate.Struct(c)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ErrorResponse
			element.FailedField = err.StructNamespace()
			element.Tag = err.Tag()
			element.Value = err.Param()
			element.Error = err.Error()
			errors = append(errors, &element)
		}
	}
	return errors
}
