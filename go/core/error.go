package core

type MagicTheGatheringError struct {
	IsMagicTheGatheringError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMagicTheGatheringError(code string, msg string, ctx *Context) *MagicTheGatheringError {
	return &MagicTheGatheringError{
		IsMagicTheGatheringError: true,
		Sdk:              "MagicTheGathering",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MagicTheGatheringError) Error() string {
	return e.Msg
}
