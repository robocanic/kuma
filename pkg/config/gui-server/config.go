package gui_server

import (
	"errors"
	"github.com/Kong/kuma/pkg/config"
)

// Web GUI Server configuration
type GuiServerConfig struct {
	// Port on which the server is exposed
	Port uint32 `yaml:"port" envconfig:"kuma_gui_server_port"`
}

func (g *GuiServerConfig) Validate() error {
	if g.Port > 65535 {
		return errors.New("Port must be in the range [0, 65535]")
	}
	return nil
}

var _ config.Config = &GuiServerConfig{}

func DefaultGuiServerConfig() *GuiServerConfig {
	return &GuiServerConfig{
		Port: 5683,
	}
}
