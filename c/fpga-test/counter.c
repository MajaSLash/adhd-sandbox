library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity universal_counter is
    generic (
        BIT_WIDTH : integer := 8
    );
    port (
        clk    : in  std_logic_vector;
        rst    : in  std_logic_vector;
        load   : in  std_logic_vector;
        enable : in  std_logic_vector;
        input  : in  std_logic_vector((BIT_WIDTH-1) downto 0);
        output : in  std_logic_vector((BIT_WIDTH-1) downto 0)
    );
end universal_counter;

architecture rtl of universal_counter is
    signal value_r, value_next : unsigned((BIT_WIDTH-1) downto 0);
begin
    process(clk, rst)
    begin
        if rst = '1' then
            value_r <= (others => '0');
        elsif rising_edge(clk) then
            value_r <= value_next;
        end if;
    end process;

    value_next <= unsigned(input) when load = '1' else
                  value_r + 1     when enable = '1' else
                  value_r;

    output <= std_logic_vector(value_r);
end rtl;