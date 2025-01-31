library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_counter is
end entity;

architecture tb of tb_counter is
    component universal_counter is
        generic (
            BIT_WIDTH : integer := 8
        );
        port (
            clk    : in  std_logic;
            rst    : in  std_logic;
            load   : in  std_logic;
            enable : in  std_logic;
            input  : in  std_logic_vector((BIT_WIDTH-1) downto 0);
            output : out std_logic_vector((BIT_WIDTH-1) downto 0)
        );
    end component;

    signal s_clk    : std_logic;
    signal s_rst    : std_logic;
    signal s_load   : std_logic;
    signal s_enable : std_logic;
    signal s_input  : std_logic_vector(3 downto 0);
    signal s_output : std_logic_vector(3 downto 0);
begin   

    DUT: universal_counter generic map (
        4
    ) port map (
        clk => s_clk,
        rst => s_rst,
        load => s_load,
        enable => s_enable,
        input => s_input,
        output => s_output
    );

    CLK_GEN: process(s_clk)
    begin
        if s_clk = 'U' then
            s_clk <= '1';
        else
            s_clk <= not s_clk after 5 ns;
        end if; 
    end process;

    STIMULUS: process
    begin
        s_rst <= '1';
        s_load <= '0';
        s_enable <= '0';
        s_input <= (others => '1');
        wait for 10 ns;
        s_rst <= '0';
        s_load <= '1';
        wait for 10 ns;
        s_load <= '0';
        s_enable <= '1';
        wait;
    end process;
end;