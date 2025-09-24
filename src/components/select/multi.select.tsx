// ** React
import {useEffect, useRef, useState} from 'react';

// ** Lucide Icon
import {Check, ChevronDown, X, XCircle} from 'lucide-react';

// ** Shadcn ui
import {Button} from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/components/ui/command';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Badge} from '@/components/ui/badge';

export interface Option {
    value: number;
    label: string;
    disabled?: boolean;
}

interface MultiSelectProps {
    options: Option[];
    value: Option[];
    onChange: (value: Option[]) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    maxSelected?: number;
    showSelectAll?: boolean;
    searchPlaceholder?: string;
    emptyText?: string;
    maxDisplayed?: number;
    displayAll?: boolean;
}

export default function MultiSelect({
                                        options,
                                        value,
                                        onChange,
                                        placeholder = 'Select options...',
                                        className = '',
                                        disabled = false,
                                        maxSelected,
                                        showSelectAll = true,
                                        searchPlaceholder = 'Search...',
                                        emptyText = 'No results found.',
                                        maxDisplayed = 2,
                                        displayAll = false,
                                    }: MultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const triggerRef = useRef<HTMLButtonElement>(null);
    const commandRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    const isSelected = (opt: Option) => value.some(item => item.value === opt.value);
    const canSelectMore = !maxSelected || value.length < maxSelected;

    const toggleOption = (opt: Option) => {
        if (disabled || opt.disabled) return;

        if (isSelected(opt)) {
            onChange(value.filter(item => item.value !== opt.value));
        } else if (canSelectMore) {
            onChange([...value, opt]);
        }
    };

    const handleRemove = (opt: Option) => {
        if (disabled) return;
        onChange(value.filter(item => item.value !== opt.value));
    };

    const handleClearAll = () => {
        if (disabled) return;
        onChange([]);
    };

    const handleSelectAll = () => {
        const availableOptions = filteredOptions.filter(opt => !opt.disabled);

        if (isAllSelected) {
            const valuesToRemove = availableOptions.map(opt => opt.value);
            const newSelected = value.filter(item => !valuesToRemove.includes(item.value));
            onChange(newSelected);
        } else {
            const newSelected = [...value];
            availableOptions.forEach(opt => {
                if (!isSelected(opt) && (canSelectMore || newSelected.length < (maxSelected || Infinity))) {
                    newSelected.push(opt);
                }
            });
            onChange(newSelected);
        }
    };

    const isAllSelected =
        filteredOptions.length > 0 &&
        filteredOptions.filter(opt => !opt.disabled).every(opt => isSelected(opt));

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node) &&
                commandRef.current &&
                !commandRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
                setSearchValue('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const displayedValues = typeof maxDisplayed === 'number' ? value.slice(0, maxDisplayed) : value;
    const remainingCount =
        typeof maxDisplayed === 'number' ? value.length - maxDisplayed : 0;

    return (
        <>
            {displayAll && (
                <div className={`flex gap-3 flex-wrap ${value.length < 1 ? "" : "my-2"}`}>
                    {value.map(opt => (
                        <Badge
                            key={opt.value}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full flex items-center gap-1 pl-2 pr-1 py-1"
                        >
                            <span className="text-xs truncate">{opt.label}</span>
                            <div
                                className="ml-1 cursor-pointer p-0.5"
                                onMouseDown={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleRemove(opt);
                                }}
                            >
                                <X size={12}/>
                            </div>
                        </Badge>
                    ))}
                </div>
            )}
            <div className={`relative w-full ${className}`}>
                <Button
                    ref={triggerRef}
                    variant="outline"
                    className={`w-full justify-between text-left items-center px-3 py-2 text-sm ${
                        disabled
                            ? 'bg-muted text-muted-foreground cursor-not-allowed'
                            : 'hover:bg-accent'
                    } ${open ? 'ring-2 ring-ring ring-offset-2' : ''} min-h-[44px]`}
                    onClick={() => !disabled && setOpen(!open)}
                    disabled={disabled}
                    type="button"
                >
                    <div className="flex items-center gap-1 overflow-hidden whitespace-nowrap max-w-full">
                        {value.length === 0 ? (
                            <span className="text-muted-foreground text-sm truncate">{placeholder}</span>
                        ) : (
                            <>
                                {displayedValues.map(opt => (
                                    <Badge
                                        key={opt.value}
                                        variant="secondary"
                                        className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full flex items-center gap-1 pl-2 pr-1 py-1 truncate max-w-[160px]"
                                    >
                                        <span className="text-xs truncate">{opt.label}</span>
                                        {!disabled && (
                                            <div
                                                className="ml-1 cursor-pointer p-0.5"
                                                onMouseDown={e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleRemove(opt);
                                                }}
                                            >
                                                <X size={12}/>
                                            </div>
                                        )}
                                    </Badge>
                                ))}
                                {remainingCount > 0 && (
                                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                                        +{remainingCount} more
                                    </Badge>
                                )}
                            </>
                        )}
                    </div>

                    <div className="flex items-center gap-1 ml-2">
                        {value.length > 0 && !disabled && (
                            <div
                                className="text-muted-foreground transition-colors cursor-pointer p-1 rounded"
                                onMouseDown={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleClearAll();
                                }}
                            >
                                <XCircle size={16}/>
                            </div>
                        )}
                        <ChevronDown
                            className={`h-4 w-4 shrink-0 opacity-50 transition-transform ${
                                open ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                </Button>

                {open && !disabled && (
                    <div
                        ref={commandRef}
                        className="absolute z-50 mt-1 w-full bg-popover border rounded-md shadow-lg animate-in fade-in-0 zoom-in-95"
                    >
                        <Command shouldFilter={false}>
                            <CommandInput
                                placeholder={searchPlaceholder}
                                value={searchValue}
                                onValueChange={setSearchValue}
                                className="border-none"
                            />
                            <CommandList>
                                <CommandEmpty>{emptyText}</CommandEmpty>
                                <CommandGroup>
                                    {showSelectAll && filteredOptions.length > 1 && (
                                        <CommandItem
                                            onSelect={handleSelectAll}
                                            className="cursor-pointer font-medium"
                                        >
                                            <Check
                                                className={`mr-2 h-4 w-4 ${
                                                    isAllSelected
                                                        ? 'opacity-100 text-primary'
                                                        : 'opacity-0'
                                                }`}
                                            />
                                            {isAllSelected ? 'Deselect all' : 'Select all'}
                                        </CommandItem>
                                    )}

                                    <ScrollArea className="max-h-32 overflow-y-auto">
                                        {filteredOptions.map(opt => {
                                            const selected = isSelected(opt);
                                            const canSelect = canSelectMore || selected;

                                            return (
                                                <CommandItem
                                                    key={opt.value}
                                                    onSelect={() => toggleOption(opt)}
                                                    className={`cursor-pointer ${
                                                        opt.disabled
                                                            ? 'opacity-50 cursor-not-allowed'
                                                            : ''
                                                    } ${
                                                        !canSelect && !selected
                                                            ? 'opacity-50 cursor-not-allowed'
                                                            : ''
                                                    }`}
                                                    disabled={opt.disabled || (!canSelect && !selected)}
                                                >
                                                    <Check
                                                        className={`mr-2 h-4 w-4 ${
                                                            selected
                                                                ? 'opacity-100 text-primary'
                                                                : 'opacity-0'
                                                        }`}
                                                    />
                                                    <span className="flex-1">{opt.label}</span>
                                                    {opt.disabled && (
                                                        <span className="text-xs text-muted-foreground ml-2">
                                                            Unavailable
                                                        </span>
                                                    )}
                                                </CommandItem>
                                            );
                                        })}
                                    </ScrollArea>
                                </CommandGroup>
                            </CommandList>
                        </Command>

                        {maxSelected && (
                            <div className="border-t px-3 py-2 text-xs text-muted-foreground bg-muted/50">
                                Selected: {value.length}/{maxSelected}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}